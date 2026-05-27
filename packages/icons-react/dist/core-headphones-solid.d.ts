import React from 'react';

export interface CoreHeadphonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeadphonesSolid: React.FC<CoreHeadphonesSolidProps>;
export default CoreHeadphonesSolid;
