import React from 'react';

export interface CoreWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWind(props: CoreWindProps): React.ReactElement;
export default CoreWind;
