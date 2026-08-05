import React from 'react';

export interface LanFluteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluteThin(props: LanFluteThinProps): React.ReactElement;
export default LanFluteThin;
