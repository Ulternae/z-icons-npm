import React from 'react';

export interface LanTimelineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineThin(props: LanTimelineThinProps): React.ReactElement;
export default LanTimelineThin;
