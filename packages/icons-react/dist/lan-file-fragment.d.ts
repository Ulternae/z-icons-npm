import React from 'react';

export interface LanFileFragmentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileFragment: React.FC<LanFileFragmentProps>;
export default LanFileFragment;
