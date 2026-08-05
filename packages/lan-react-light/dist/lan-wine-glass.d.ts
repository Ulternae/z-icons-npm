import React from 'react';

export interface LanWineGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineGlass(props: LanWineGlassProps): React.ReactElement;
export default LanWineGlass;
