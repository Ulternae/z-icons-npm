import React from 'react';

export interface LanEraserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEraserRegular(props: LanEraserRegularProps): React.ReactElement;
export default LanEraserRegular;
