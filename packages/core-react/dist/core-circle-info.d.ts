import React from 'react';

export interface CoreCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleInfo(props: CoreCircleInfoProps): React.ReactElement;
export default CoreCircleInfo;
