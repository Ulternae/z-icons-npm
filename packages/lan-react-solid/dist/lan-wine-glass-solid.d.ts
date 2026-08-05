import React from 'react';

export interface LanWineGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineGlassSolid(props: LanWineGlassSolidProps): React.ReactElement;
export default LanWineGlassSolid;
