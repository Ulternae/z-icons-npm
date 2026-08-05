import React from 'react';

export interface LanWineBottleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineBottleThin(props: LanWineBottleThinProps): React.ReactElement;
export default LanWineBottleThin;
