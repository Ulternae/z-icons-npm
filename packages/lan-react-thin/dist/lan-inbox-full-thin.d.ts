import React from 'react';

export interface LanInboxFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxFullThin(props: LanInboxFullThinProps): React.ReactElement;
export default LanInboxFullThin;
