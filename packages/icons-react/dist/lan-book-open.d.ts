import React from 'react';

export interface LanBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpen: React.FC<LanBookOpenProps>;
export default LanBookOpen;
