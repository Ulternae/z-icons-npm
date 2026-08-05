import React from 'react';

export interface LanFaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaxThin(props: LanFaxThinProps): React.ReactElement;
export default LanFaxThin;
