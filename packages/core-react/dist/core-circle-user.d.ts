import React from 'react';

export interface CoreCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleUser(props: CoreCircleUserProps): React.ReactElement;
export default CoreCircleUser;
