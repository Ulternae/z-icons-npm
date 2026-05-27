import React from 'react';

export interface NeoPhoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPhoneSlash: React.FC<NeoPhoneSlashProps>;
export default NeoPhoneSlash;
