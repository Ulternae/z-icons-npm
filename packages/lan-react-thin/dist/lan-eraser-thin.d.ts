import React from 'react';

export interface LanEraserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEraserThin(props: LanEraserThinProps): React.ReactElement;
export default LanEraserThin;
