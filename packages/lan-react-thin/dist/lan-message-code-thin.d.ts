import React from 'react';

export interface LanMessageCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageCodeThin(props: LanMessageCodeThinProps): React.ReactElement;
export default LanMessageCodeThin;
