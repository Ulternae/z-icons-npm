import React from 'react';

export interface MinaHeadphonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadphonesSolid: React.FC<MinaHeadphonesSolidProps>;
export default MinaHeadphonesSolid;
