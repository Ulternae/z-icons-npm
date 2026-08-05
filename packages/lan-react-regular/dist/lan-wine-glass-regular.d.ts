import React from 'react';

export interface LanWineGlassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineGlassRegular(props: LanWineGlassRegularProps): React.ReactElement;
export default LanWineGlassRegular;
