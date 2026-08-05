import React from 'react';

export interface LanEraserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEraser(props: LanEraserProps): React.ReactElement;
export default LanEraser;
