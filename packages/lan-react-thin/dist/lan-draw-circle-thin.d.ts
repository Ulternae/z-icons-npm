import React from 'react';

export interface LanDrawCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawCircleThin(props: LanDrawCircleThinProps): React.ReactElement;
export default LanDrawCircleThin;
