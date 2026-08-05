import React from 'react';

export interface LanAlmostEqualToProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlmostEqualTo(props: LanAlmostEqualToProps): React.ReactElement;
export default LanAlmostEqualTo;
