import React from 'react';

export interface LanSignatureSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureSlash: React.FC<LanSignatureSlashProps>;
export default LanSignatureSlash;
