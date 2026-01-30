export interface VCardData {
  firstName: string;
  lastName: string;
  phone: string;
  title?: string;
  organization?: string;
  email?: string;
  instagram?: string;
  website?: string;
}

export function generateVCard(data: VCardData): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${data.lastName};${data.firstName};;;`,
    `FN:${data.firstName} ${data.lastName}`,
  ];

  if (data.title) {
    lines.push(`TITLE:${data.title}`);
  }

  if (data.organization) {
    lines.push(`ORG:${data.organization}`);
  }

  if (data.phone) {
    const cleanPhone = data.phone.replace(/\D/g, "");
    lines.push(`TEL;TYPE=CELL:+1${cleanPhone}`);
  }

  if (data.email) {
    lines.push(`EMAIL:${data.email}`);
  }

  if (data.instagram) {
    lines.push(`X-SOCIALPROFILE;TYPE=instagram:${data.instagram}`);
    lines.push(`URL:${data.instagram}`);
  }

  if (data.website) {
    lines.push(`URL:${data.website}`);
  }

  lines.push("END:VCARD");

  return lines.join("\r\n");
}

export function downloadVCard(data: VCardData): void {
  const vcard = generateVCard(data);
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${data.firstName}_${data.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
