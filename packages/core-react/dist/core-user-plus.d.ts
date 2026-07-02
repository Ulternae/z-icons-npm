import React from 'react';

export interface CoreUserPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserPlus(props: CoreUserPlusProps): React.ReactElement;
export default CoreUserPlus;
