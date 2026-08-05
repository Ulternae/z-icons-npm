import React from 'react';

export interface LanInboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxThin(props: LanInboxThinProps): React.ReactElement;
export default LanInboxThin;
