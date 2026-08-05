import React from 'react';

export interface LanWardrobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWardrobe(props: LanWardrobeProps): React.ReactElement;
export default LanWardrobe;
