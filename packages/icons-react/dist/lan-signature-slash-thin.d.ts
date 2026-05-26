import React from 'react';

export interface LanSignatureSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureSlashThin: React.FC<LanSignatureSlashThinProps>;
export default LanSignatureSlashThin;
