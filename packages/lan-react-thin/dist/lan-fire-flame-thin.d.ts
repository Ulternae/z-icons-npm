import React from 'react';

export interface LanFireFlameThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameThin(props: LanFireFlameThinProps): React.ReactElement;
export default LanFireFlameThin;
