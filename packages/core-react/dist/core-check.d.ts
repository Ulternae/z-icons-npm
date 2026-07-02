import React from 'react';

export interface CoreCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCheck(props: CoreCheckProps): React.ReactElement;
export default CoreCheck;
