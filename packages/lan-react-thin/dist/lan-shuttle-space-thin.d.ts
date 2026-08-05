import React from 'react';

export interface LanShuttleSpaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleSpaceThin(props: LanShuttleSpaceThinProps): React.ReactElement;
export default LanShuttleSpaceThin;
