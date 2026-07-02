import React from 'react';

export interface CoreLightbulbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLightbulb(props: CoreLightbulbProps): React.ReactElement;
export default CoreLightbulb;
