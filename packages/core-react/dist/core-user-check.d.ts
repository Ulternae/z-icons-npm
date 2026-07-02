import React from 'react';

export interface CoreUserCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserCheck(props: CoreUserCheckProps): React.ReactElement;
export default CoreUserCheck;
