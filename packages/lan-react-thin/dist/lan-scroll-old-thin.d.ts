import React from 'react';

export interface LanScrollOldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollOldThin(props: LanScrollOldThinProps): React.ReactElement;
export default LanScrollOldThin;
