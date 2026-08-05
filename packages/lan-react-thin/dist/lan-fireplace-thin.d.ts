import React from 'react';

export interface LanFireplaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireplaceThin(props: LanFireplaceThinProps): React.ReactElement;
export default LanFireplaceThin;
