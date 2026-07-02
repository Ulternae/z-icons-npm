import React from 'react';

export interface CoreFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFlag(props: CoreFlagProps): React.ReactElement;
export default CoreFlag;
