import React from 'react';

export interface LanEraserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEraserSolid(props: LanEraserSolidProps): React.ReactElement;
export default LanEraserSolid;
