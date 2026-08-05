import React from 'react';

export interface LanEyeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeThin(props: LanEyeThinProps): React.ReactElement;
export default LanEyeThin;
