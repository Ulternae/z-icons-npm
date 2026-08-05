import React from 'react';

export interface LanAtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtThin(props: LanAtThinProps): React.ReactElement;
export default LanAtThin;
