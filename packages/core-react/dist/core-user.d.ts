import React from 'react';

export interface CoreUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUser(props: CoreUserProps): React.ReactElement;
export default CoreUser;
