import React from 'react';

export interface LanBezierCurveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBezierCurveThin(props: LanBezierCurveThinProps): React.ReactElement;
export default LanBezierCurveThin;
