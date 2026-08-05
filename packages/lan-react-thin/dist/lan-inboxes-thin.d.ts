import React from 'react';

export interface LanInboxesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxesThin(props: LanInboxesThinProps): React.ReactElement;
export default LanInboxesThin;
