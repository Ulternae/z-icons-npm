import React from 'react';

export interface LanCapsulesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsules(props: LanCapsulesProps): React.ReactElement;
export default LanCapsules;
