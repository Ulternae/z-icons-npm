import React from 'react';

export interface LanFileCadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCadRegular(props: LanFileCadRegularProps): React.ReactElement;
export default LanFileCadRegular;
