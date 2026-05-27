import React from 'react';

export interface NeoHeadphonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeadphonesSolid: React.FC<NeoHeadphonesSolidProps>;
export default NeoHeadphonesSolid;
