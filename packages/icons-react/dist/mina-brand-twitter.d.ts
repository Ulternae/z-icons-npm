import React from 'react';

export interface MinaBrandTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandTwitter: React.FC<MinaBrandTwitterProps>;
export default MinaBrandTwitter;
