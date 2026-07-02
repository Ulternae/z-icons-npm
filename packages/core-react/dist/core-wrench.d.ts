import React from 'react';

export interface CoreWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWrench(props: CoreWrenchProps): React.ReactElement;
export default CoreWrench;
