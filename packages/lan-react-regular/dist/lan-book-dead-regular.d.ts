import React from 'react';

export interface LanBookDeadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookDeadRegular(props: LanBookDeadRegularProps): React.ReactElement;
export default LanBookDeadRegular;
