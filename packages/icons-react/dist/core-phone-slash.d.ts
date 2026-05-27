import React from 'react';

export interface CorePhoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneSlash: React.FC<CorePhoneSlashProps>;
export default CorePhoneSlash;
