import React from 'react';

export interface LanWineGlassAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineGlassAlt(props: LanWineGlassAltProps): React.ReactElement;
export default LanWineGlassAlt;
