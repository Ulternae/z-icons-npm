import React from 'react';

export interface NeoLightbulbSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLightbulbSolid(props: NeoLightbulbSolidProps): React.ReactElement;
export default NeoLightbulbSolid;
