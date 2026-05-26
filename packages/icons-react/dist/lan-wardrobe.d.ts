import React from 'react';

export interface LanWardrobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWardrobe: React.FC<LanWardrobeProps>;
export default LanWardrobe;
