import React from 'react';

export interface LanRectangleApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleApi(props: LanRectangleApiProps): React.ReactElement;
export default LanRectangleApi;
