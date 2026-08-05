import React from 'react';

export interface LanFileFragmentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileFragment(props: LanFileFragmentProps): React.ReactElement;
export default LanFileFragment;
