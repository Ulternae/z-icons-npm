import React from 'react';

export interface CoreLightbulbSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLightbulbSolid(props: CoreLightbulbSolidProps): React.ReactElement;
export default CoreLightbulbSolid;
